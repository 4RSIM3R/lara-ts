<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Request;

class ItemController extends Controller
{

    public function all(Request $request)
    {
        return inertia('item/all');
    }

    public function detail($id, Request $request)
    {
        return inertia('item/detail');
    }
}
