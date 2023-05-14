<?php

namespace App\Http\Controllers;

use App\Models\Announcement;
use App\Models\ProjectManager;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class AnnouncementController extends Controller
{
    public function getAnnouncements(Request $request)
    {
        $token = $request->header('Authorization');
        $token = str_replace('Bearer ', "", $token);

        if (!$token) {
            return response()->json([
                'success' => false,
                'message' => 'User token is not proper token!',
            ]);
        }
        
        $announcements = Announcement::where('show', 1)->get();

        return response()->json([
            'success' => true,
            'data' => $announcements,
        ]);
    }

    public function getAllAnnouncements(Request $request)
    {
        $token = $request->header('Authorization');
        $token = str_replace('Bearer ', "", $token);

        if (!$token) {
            return response()->json([
                'success' => false,
                'message' => 'User token is not proper token!',
            ]);
        }
        
        $announcements = Announcement::all();

        return response()->json([
            'success' => true,
            'data' => $announcements,
        ]);
    }

    public function updateAnnouncements(Request $request)
    {
        $token = $request->header('Authorization');
        $token = str_replace('Bearer ', "", $token);
        Log::info($token);

        $tokenValues = explode(' ', $token);
        $newTitle = $tokenValues[0];
        log::info($newTitle);
        $newDescription = $tokenValues[1];
        $newName = $tokenValues[2];
        $newDate = $tokenValues[2];
        $newTime = $tokenValues[2];
        $newStatus = $tokenValues[2];

        // $student = Announcement::where('tp_number', $tp_number)->first();

        // if (!$student) {
        //     return response()->json([
        //         'success' => false,
        //         'message' => 'Student record not found',
        //     ]);
        // }

        // $student->supervisor = $supervisor;
        // $student->secondmarker = $secondMarker;
        // $student->save();

        

        return response()->json([
            'success' => true,
            'message' => 'Updated Student Record Successfully!',
        ]);
    }

    public function addAnnouncements(Request $request)
    {

        $Announcement = new Announcement;
        $Announcement->title = $request->input('title');
        $Announcement->description = $request->input('description');
        $Announcement->projectmanager = $request->input('name');
        $Announcement->date = $request->input('date');
        $Announcement->time = $request->input('time');
        $Announcement->show = $request->input('show');
        $Announcement->save();
    

    
        return response()->json(['message' => 'Event added successfully']);
    }


    public function getSpecificAnnouncements(Request $request)
    {
        $token = $request->header('Authorization');
        $token = str_replace('Bearer ', "", $token);
        $announcements = Announcement::where('id', $token)->get();

        if (!$announcements) {
            return response()->json([
                'success' => false,
                'message' => 'No Announcement found!',
            ]);
        }

        return response()->json([
            'success' => true,
            'data' => $announcements,
        ]);
    }
}


