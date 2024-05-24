<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{

    public function index()
    {
        return inertia('auth/register');
    }

    public function store(RegisterRequest $request)
    {
        try {
            $data = $request->validated();
            $data['password'] = Hash::make($data['password']);
            DB::beginTransaction();
            User::query()->create($data);
            DB::commit();
            return redirect(route('login.index'));
        } catch (\Exception $th) {
            DB::rollBack();
            return back()->withErrors('errors', ["message" => $th->getMessage()]);
        }
    }
}
