<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Response;

class HomeController extends Controller
{


    public function index(Request $request)
    {
        $user = Auth::guard("web")->user();
        return inertia('home', [
            'user' => $user
        ]);
    }

}
