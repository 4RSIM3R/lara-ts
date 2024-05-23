<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Item;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Response;

class HomeController extends Controller
{


    public function index(Request $request)
    {
        $categories = Category::limit(3)->get();
        $search = $request->get('search');
        $id = $request->get('category_id') ??  $categories[0]->id;
        $items = Item::query()
            ->where('category_id', '=', $id)
            ->take(8)
            ->when($search != null, function ($query) use ($search) {
                return $query->where('name', 'like', "%{$search}%");
            })
            ->get();
        $recommendations = Item::query()->limit(4)->get();
        return inertia('home', ['categories' =>  $categories, "items" => $items, "recommendations" => $recommendations]);
    }
}
