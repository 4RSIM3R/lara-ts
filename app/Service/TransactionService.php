<?php

namespace App\Service;

use App\Contract\TransactionContract;
use App\Models\Transaction;

class TransactionService extends BaseService implements TransactionContract
{
    protected Transaction $model;

    public function __construct(Transaction $model)
    {
        $this->model = $model;
        parent::__construct($model);
    }
}
