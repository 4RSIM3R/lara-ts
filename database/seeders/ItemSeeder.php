<?php

namespace Database\Seeders;

use App\Models\Item;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Testing\Fakes\Fake;
use Illuminate\Support\Str;

class ItemSeeder extends Seeder
{
    protected $categories = [
        1 => [ // Assuming '1' is the category_id for 'Makanan'
            ["name" => "Mie Ayam", "image_url" => "https://upload.wikimedia.org/wikipedia/commons/8/82/Mi_ayam_jamur.JPG"],
            ["name" => "Nasi Goreng", "image_url" => "https://upload.wikimedia.org/wikipedia/commons/3/3e/Nasi_goreng_indonesia.jpg"],
            // Add the rest as above, each with corresponding image URLs
        ],
        2 => [ // Assuming '2' is the category_id for 'Minuman'
            ["name" => "Kopi", "image_url" => "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG"],
            ["name" => "Teh Manis", "image_url" => "https://upload.wikimedia.org/wikipedia/commons/6/6b/ES_TEH_MANIS.jpg"],
            // Continue with other items similarly
        ],
        3 => [ // Assuming '3' is the category_id for 'Lainnya'
            ["name" => "Snack", "image_url" => "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/SnackfoodRackDF.JPG/640px-SnackfoodRackDF.JPG"],
            ["name" => "Jajan Lawas", "image_url" => "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Jajan_Pasar_in_Jakarta_edit.JPG/1200px-Jajan_Pasar_in_Jakarta_edit.JPG"],
            // Continue for each item
        ],
    ];

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        foreach ($this->categories as $categoryId => $items) {
            foreach ($items as $item) {
                Item::create([
                    'name' => $item['name'],
                    'category_id' => $categoryId,
                    'slug' => Str::slug($item['name']), // Generate slug from name
                    'description' => fake()->text(),
                    'price' => fake()->numberBetween(2, 75) * 1000, // Random price between 10 and 1000
                    'image_url' => $item['image_url'],
                ]);
            }
        }
    }
}
