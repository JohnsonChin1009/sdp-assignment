<?php

namespace App\Http\Controllers;

use App\Models\ProjectManager;
use Illuminate\Http\Request;
use App\Models\Schedule;
use App\Models\Lecturer;

class EventController extends Controller
{
    public function addSupSchedule(Request $request)
    {
        $token = $request->header("Authorization");
        $token = str_replace('Bearer', "", $token);
        $lecturer = Lecturer::where('email', $token)->first();
    
        if (!$lecturer) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }
    
        $event = new Schedule;
        $event->name = $request->input('title');
        $event->start = $request->input('start');
        $event->end = $request->input('end');
        $event->lecturerid = $lecturer->id;
        $event->save();
    

    
        return response()->json(['message' => 'Event added successfully']);
    }

    public function addPMSchedule(Request $request)
    {
        $token = $request->header("Authorization");
        $token = str_replace('Bearer', "", $token);
        $projectmanager = ProjectManager::where('email', $token)->first();
    
        if (!$projectmanager) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }
    
        $event = new Schedule;
        $event->name = $request->input('title');
        $event->start = $request->input('start');
        $event->end = $request->input('end');
        $event->lecturerid = $projectmanager->id;
        $event->save();
    

    
        return response()->json(['message' => 'Event added successfully']);
    }


}