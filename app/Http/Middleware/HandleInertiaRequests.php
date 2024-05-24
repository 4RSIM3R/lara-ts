<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    protected $rootView = 'app';

    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => auth('web')->user(),
            ],
            'ziggy' => fn() => [
                ...(new Ziggy)->toArray(),
                ...[
                    'location' => $request->url(),
                ],
            ],
            'csrf_token' => csrf_token(),
        ]);
    }
}
