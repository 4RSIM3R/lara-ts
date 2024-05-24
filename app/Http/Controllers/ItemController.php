<?php

namespace App\Http\Controllers;

use App\Contract\ItemContract;
use App\Service\ItemService;
use Illuminate\Support\Facades\Request;

class ItemController extends Controller
{

    protected ItemService $service;

    public function __construct(ItemService $service)
    {
        $this->service = $service;
    }

    public function all(Request $request)
    {
        return inertia('item/all');
    }

    public function detail($slug, Request $request)
    {
        $where = [
            ['slug', '=', $slug]
        ];
        $data = $this->service->all(whereConditions: $where, relations: ['category'])[0];
        return inertia('item/detail', ["data" => $data]);
    }
}
