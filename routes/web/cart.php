<?php

use App\Contract\CartContract;
use App\Http\Controllers\CartController;
use App\Http\Controllers\ItemController;
use Illuminate\Support\Facades\Route;


Route::prefix('cart')->group(function () {
    Route::get('', [CartController::class, 'all'])->name('cart.index');
    Route::post('', [CartController::class, 'store'])->name('cart.store');
});