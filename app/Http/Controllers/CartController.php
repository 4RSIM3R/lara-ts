<?php

namespace App\Http\Controllers;

use App\Http\Requests\CartRequest;
use App\Models\Cart;
use App\Service\CartService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;

class CartController extends Controller
{

    protected CartService $service;

    public function __construct(CartService $service)
    {
        $this->service = $service;
    }

    public function all(Request $request)
    {
        $user = Auth::guard("web")->id();

        $where = [
            ["user_id", "=", $user]
        ];

        $data = $this->service->all(paginate: false, whereConditions: $where, relations: ['item']);

        return inertia('cart/all', ["data" => $data]);
    }

    public function store(CartRequest $request)
    {
        $data = $request->validated();
        $data["quantity"] = 1;
        $data["user_id"] = Auth::guard("web")->id();
        $result = $this->service->create($data);

        if ($result instanceof Exception) {
            return back()->withErrors('errors', ["message" => $result->getMessage()]);
        } else {
            return redirect(route('home'));
        }
    }
}
