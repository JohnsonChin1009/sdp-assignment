<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\schedule;

class PMController extends Controller
{
    public function store(Request $request)
    {
        $schedule = new schedule;
        $schedule->id = $request->input('eventName');
        $schedule->date = $request->input('startDatetime');
        $schedule->time = $request->input('endDatetime');
        $schedule->save();

        return response()->json(['message' => 'Schedule added successfully']);
    }
}
