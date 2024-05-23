<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{



    public function index()
    {
        return inertia('auth/login');
    }

    public function store(LoginRequest $request)
    {
        try {
            $data = $request->validated();
            $login = Auth::guard("web")->attempt($data);

            if ($login) {
                return redirect(route('home'));
            } else {
                return back()->withErrors('errors', 'Email atau password salah');
            }
        } catch (\Exception $th) {
            return back()->withErrors('errors', ["message" => $th->getMessage()]);
        }
    }
}
