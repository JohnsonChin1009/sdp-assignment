<?php

namespace App\Http\Controllers;

use App\Models\ProjectManager;
use Illuminate\Http\Request;
use App\Models\Schedule;
use App\Models\Lecturer;
use Illuminate\Support\Facades\Log;

class EventController extends Controller
{
    public function addSupSchedule(Request $request)
    {
        $token = $request->header("Authorization");
        $token = str_replace('Bearer ', "", $token);
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
        $token = str_replace('Bearer ', "", $token);
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

    public function getPMSchedule(Request $request)
    {
        $token = $request->header('Authorization');
        Log::info($request->header('Authorization'));
        $token = str_replace('Bearer ', "", $token);
        Log::info($token);
        $PM = ProjectManager::where('email', $token)->first();
        Log::info($PM);
        $PMID = $PM->id;
        Log::info($PMID);

        if (!$PM) {
            return response()->json([
                'success' => false,
                'message' => 'Lecturer does not have any event records',
            ]
            );}

        $schedule = Schedule::where('lecturerid', $PMID)->get();
        Log::info($schedule);

        return response()->json([
            'success' => true,
            'data' => $schedule,
        ]);
    }

    public function getLecSchedule(Request $request)
    {
        $token = $request->header('Authorization');
        Log::info($request->header('Authorization'));
        $token = str_replace('Bearer ', "", $token);
        Log::info($token);
        $Lecturer = Lecturer::where('email', $token)->first();
        Log::info($Lecturer);
        $Lecturerid = $Lecturer->id;
        Log::info($Lecturerid);

        if (!$Lecturer) {
            return response()->json([
                'success' => false,
                'message' => 'Lecturer does not have any event records',
            ]
            );}

        $schedule = Schedule::where('lecturerid', $Lecturerid)->get();
        Log::info($schedule);

        return response()->json([
            'success' => true,
            'data' => $schedule,
        ]);
    }


    public function deleteEvent($id)
    {
        $event = Schedule::where('id', $id)->first();

        if (!$event) {
            return response()->json(['message' => 'event not found'], 404);
        }

        $event->delete();

        return response()->json(['message' => 'event deleted']);

    }

}