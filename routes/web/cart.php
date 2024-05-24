<?php

use App\Contract\CartContract;
use App\Http\Controllers\CartController;
use App\Http\Controllers\ItemController;
use Illuminate\Support\Facades\Route;


Route::prefix('item')->group(function () {
    Route::get('', [CartContract::class, 'all'])->name('cart.index');
    Route::post('', [CartController::class, 'store'])->name('cart.store');
});