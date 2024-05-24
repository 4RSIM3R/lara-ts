<?php

namespace App\Service;

use App\Contract\CategoryContract;
use App\Models\Category;

class CategoryService extends BaseService implements CategoryContract
{

    protected Category $model;

    public function __construct(Category $model)
    {
        $this->model = $model;
        parent::__construct($model);
    }
}
