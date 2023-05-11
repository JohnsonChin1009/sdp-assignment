<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Schedule;

class EventController extends Controller
{
    public function addSchedule(Request $request)
    {
        // $token = $request->header("Authorization");

        // $lecturer = lecturer::where('email', $token)->first();

        $event = new Schedule;
        $event->name = $request->input('title');
        $event->start = $request->input('start');
        $event->end = $request->input('end');
        // $event->id = $lecturer->('id');
        $event->save();
        
        return response()->json(['message' => 'Event added successfully']);
    }

}