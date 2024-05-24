<?php

namespace App\Providers;

use App\Contract\AuthContract;
use App\Contract\BaseContract;
use App\Contract\CartContract;
use App\Contract\CategoryContract;
use App\Contract\ItemContract;
use App\Contract\TransactionContract;
use App\Service\AuthService;
use App\Service\BaseService;
use App\Service\CartService;
use App\Service\CategoryService;
use App\Service\ItemService;
use App\Service\TransactionService;
use Illuminate\Support\ServiceProvider;

class ContractServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind(BaseContract::class, BaseService::class);
        $this->app->bind(AuthContract::class, AuthService::class);
        $this->app->bind(CartContract::class, CartService::class);
        $this->app->bind(ItemContract::class, ItemService::class);
        $this->app->bind(TransactionContract::class, TransactionService::class);
        $this->app->bind(CategoryContract::class, CategoryService::class);
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
