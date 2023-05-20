<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Services\MoodleApiService;
use App\Services\MockMoodleApiService;

class MoodleServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register()
    {
        if ($this->app->environment('local')) {
            $this->app->bind(MoodleApiService::class, MockMoodleApiService::class);
        } else {
            $this->app->bind(MoodleApiService::class, function ($app) {
                //What is this?
            });
        }
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
