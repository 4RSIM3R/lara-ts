<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\RegisterController;
use Illuminate\Support\Facades\Route;


Route::prefix('auth')->group(function () {
    Route::get('login', [AuthController::class, 'index'])->name('login.index');
    Route::post('login', [AuthController::class, 'store'])->name('login.store');
    Route::get('register', [RegisterController::class, 'index'])->name('register.index');
    Route::post('register', [RegisterController::class, 'store'])->name('register.store');
});