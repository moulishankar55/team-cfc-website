import os
import json

base_folder = "Previous Year"
years = ["2023", "2024", "2025"]

gallery = {}

for year in years:
    folder = os.path.join(base_folder, year)
    images = []

    if os.path.exists(folder):
        for filename in os.listdir(folder):
            if filename.lower().endswith((".jpg", ".jpeg", ".png", ".webp")):
                images.append(f"{base_folder}/{year}/{filename}")

    images.sort()
    gallery[year] = images

with open("gallery.json", "w", encoding="utf-8") as file:
    json.dump(gallery, file, indent=2)

print("Gallery list created successfully!")
print()

for year in years:
    print(f"{year}: {len(gallery[year])} pictures")

input("\nPress Enter to close...")