<?php

namespace App\Service;

use App\Contract\TransactionContract;
use App\Models\Cart;
use Illuminate\Database\Eloquent\Model;

class CartService extends BaseService implements TransactionContract
{

    protected Model $model;

    public function __construct(Cart $model)
    {
        $this->model = $model;
        parent::__construct($model);
    }
}
