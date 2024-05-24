<?php

use App\Http\Controllers\ItemController;
use Illuminate\Support\Facades\Route;


Route::prefix('item')->group(function () {
    Route::get('', [ItemController::class, 'all']);
    Route::get('{slug}', [ItemController::class, 'detail']);
});