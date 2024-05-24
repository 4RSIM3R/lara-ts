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
        1 => [ // 'Makanan'
            "Mie Ayam", "Nasi Goreng", "Satay", "Soto Ayam", "Gado-Gado", 
            "Rendang", "Pempek", "Bakso", "Ayam Geprek", "Martabak", 
            "Nasi Padang", "Nasi Uduk", "Bebek Goreng", "Nasi Kuning", "Tahu Bulat",
            "Tempe Mendoan", "Kerak Telor", "Bubur Ayam", "Sate Klatak", "Lumpia"
        ],
        2 => [ // 'Minuman'
            "Kopi", "Teh Manis", "Jus Mangga", "Es Teh", "Es Jeruk",
            "Bir Pletok", "Cendol", "Kopi Luwak", "Teh Tarik", "Bandrek",
            "Es Cincau", "Jus Alpukat", "Susu Jahe", "Es Campur", "Sari Kedelai",
            "Air Kelapa", "Kombucha", "Smoothie Bowl", "Es Duren", "Wedang Jahe"
        ],
        3 => [ // 'Lainnya' - Focus on non-main food items and related accessories
            "Snack", "Piring", "Sendok", "Garpu", "Mangkuk",
            "Sumpit", "Placemat", "Napkin", "Tea Coaster", "Candle Holder",
            "Table Runner", "Fruit Basket", "Decorative Spoon", "Bread Basket", "Trivet",
            "Serving Tray", "Wine Glass Holder", "Utensil Organizer", "Jar Label", "Recipe Book"
        ],
    ];

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        foreach ($this->categories as $categoryId => $items) {
            foreach ($items as $itemName) {
                Item::create([
                    'name' => $itemName,
                    'category_id' => $categoryId,
                    'slug' => Str::slug($itemName), // Generate slug from name
                    'description' => fake()->text(),
                    'price' => fake()->numberBetween(2, 75) * 1000, // Random price between 10 and 1000
                ]);
            }
        }
    }
}
