<?php

use App\Http\Controllers\ItemController;
use Illuminate\Support\Facades\Route;


Route::prefix('transaction')->group(function () {
    Route::get('success', function () {
        return inertia('transaction/success');
    })->name('transaction.success');
});
