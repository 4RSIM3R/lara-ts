<?php

namespace App\Service;

use App\Contract\TransactionContract;
use App\Models\Item;
use Illuminate\Database\Eloquent\Model;

class ItemService extends BaseService implements TransactionContract
{

    protected Model $model;

    public function __construct(Item $model)
    {
        $this->model = $model;
        parent::__construct($model);
    }
}
