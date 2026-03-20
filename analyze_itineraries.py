#!/usr/bin/env python3
import json
import re
from collections import defaultdict, Counter

# Load the itineraries
with open('itineraries_database.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

briefs = list(data.get('briefItineraries', {}).values())
detailed = list(data.get('detailedItineraries', {}).values())

print(f"Total Brief Itineraries: {len(briefs)}")
print(f"Total Detailed Itineraries: {len(detailed)}")
print("\n" + "="*60 + "\n")

# City name normalization
CITY_PATTERNS = [
    (r'Ho Chi Minh|Saigon|Sai Gon', 'Ho Chi Minh City'),
    (r'Hanoi|Ha Noi', 'Hanoi'),
    (r'Hoi An', 'Hoi An'),
    (r'Da Nang', 'Da Nang'),
    (r'Hue', 'Hue'),
    (r'Ninh Binh', 'Ninh Binh'),
    (r'Ha Long|Halong', 'Ha Long Bay'),
    (r'Sapa|Sa Pa', 'Sapa'),
    (r'Mekong Delta', 'Mekong Delta'),
    (r'Da Lat|Dalat', 'Da Lat'),
    (r'Nha Trang', 'Nha Trang'),
    (r'Mui Ne', 'Mui Ne'),
    (r'Phong Nha', 'Phong Nha'),
    (r'Cat Ba', 'Cat Ba'),
    (r'Can Tho', 'Can Tho'),
    (r'Phnom Penh', 'Phnom Penh'),
    (r'Siem Reap|Siemreap', 'Siem Reap'),
]

def extract_city(day_text):
    """Extract city name from day description"""
    if not day_text:
        return None
    day_lower = day_text.lower()
    for pattern, city_name in CITY_PATTERNS:
        if re.search(pattern, day_text, re.IGNORECASE):
            return city_name
    return None

# Analyze city stays and route patterns
city_stays = defaultdict(list)
route_patterns = []
transfer_modes = []
free_days = []
rest_patterns = []

for it in briefs:
    if not it.get('days') or not isinstance(it['days'], list):
        continue
    
    cities = []
    current_city = None
    current_stay = 0
    
    for day_idx, day_text in enumerate(it['days']):
        city = extract_city(day_text)
        
        # Check for free/rest days
        if 'free' in day_text.lower() or 'leisure' in day_text.lower():
            free_days.append({
                'day': day_idx + 1,
                'city': current_city,
                'text': day_text
            })
        
        # Check transfer mode
        if 'fly' in day_text.lower() or 'flight' in day_text.lower():
            transfer_modes.append(('flight', day_text))
        elif any(x in day_text.lower() for x in ['by bus', 'by car', 'by private', 'transfer']):
            transfer_modes.append(('road', day_text))
        
        if city:
            if current_city and current_city != city:
                # City changed - record previous stay
                city_stays[current_city].append(current_stay)
                cities.append(current_city)
                current_city = city
                current_stay = 1
            elif current_city == city:
                # Same city, increment stay
                current_stay += 1
            else:
                # New city
                current_city = city
                current_stay = 1
        elif current_city:
            # No city mentioned but we're in a city - increment stay
            current_stay += 1
    
    # Record last city stay
    if current_city:
        city_stays[current_city].append(current_stay)
        cities.append(current_city)
    
    if cities:
        route_patterns.append({
            'days': len(it['days']),
            'start': it.get('startsIn', ''),
            'end': it.get('endsIn', ''),
            'cities': ' → '.join(cities),
            'city_list': cities
        })

print("=== MINIMUM STAYS PER CITY ===\n")
for city in sorted(city_stays.keys()):
    stays = city_stays[city]
    min_stay = min(stays)
    max_stay = max(stays)
    avg_stay = sum(stays) / len(stays)
    print(f"{city:25} min={min_stay:2d} max={max_stay:2d} avg={avg_stay:4.1f} (samples={len(stays):2d})")

print("\n" + "="*60)
print("=== COMMON ROUTE PATTERNS ===\n")

# Count route patterns
pattern_counts = Counter()
for rp in route_patterns:
    pattern_counts[rp['cities']] += 1

for pattern, count in pattern_counts.most_common(15):
    print(f"{count:2d}x: {pattern}")

print("\n" + "="*60)
print("=== TRANSFER MODE ANALYSIS ===\n")
flight_count = sum(1 for mode, _ in transfer_modes if mode == 'flight')
road_count = sum(1 for mode, _ in transfer_modes if mode == 'road')
print(f"Flights: {flight_count}")
print(f"Road transfers: {road_count}")

print("\n" + "="*60)
print("=== FREE/REST DAYS ANALYSIS ===\n")
print(f"Total free/rest days found: {len(free_days)}")
if free_days:
    free_by_city = Counter(f['city'] for f in free_days if f['city'])
    print("\nFree days by city:")
    for city, count in free_by_city.most_common():
        print(f"  {city}: {count}")

print("\n" + "="*60)
print("=== ROUTE SEQUENCE ANALYSIS ===\n")

# Analyze common sequences
sequence_counts = defaultdict(int)
for rp in route_patterns:
    cities = rp['city_list']
    for i in range(len(cities) - 1):
        seq = f"{cities[i]} → {cities[i+1]}"
        sequence_counts[seq] += 1

print("Most common city-to-city transitions:")
for seq, count in sorted(sequence_counts.items(), key=lambda x: x[1], reverse=True)[:20]:
    print(f"  {count:2d}x: {seq}")

print("\n" + "="*60)
print("=== DAY COUNT DISTRIBUTION ===\n")
day_counts = Counter(rp['days'] for rp in route_patterns)
for days in sorted(day_counts.keys()):
    print(f"{days:2d} days: {day_counts[days]:2d} itineraries")

print("\n" + "="*60)
print("=== START/END CITY PATTERNS ===\n")
start_cities = Counter(rp['start'] for rp in route_patterns if rp['start'])
end_cities = Counter(rp['end'] for rp in route_patterns if rp['end'])

print("Start cities:")
for city, count in start_cities.most_common():
    print(f"  {count:2d}x: {city}")

print("\nEnd cities:")
for city, count in end_cities.most_common():
    print(f"  {count:2d}x: {city}")
