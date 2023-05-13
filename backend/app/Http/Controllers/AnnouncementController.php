<?php

namespace App\Http\Controllers;

use App\Models\Announcement;
use App\Models\ProjectManager;
use Illuminate\Http\Request;

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

    public function addAnnouncements(Request $request)
    {
        $token = $request->header("Authorization");
        $token = str_replace('Bearer ', "", $token);
        $PM = ProjectManager::where('email', $token)->first();
    
        if (!$PM) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }
    
        $Announcement = new Announcement;
        $Announcement->name = $request->input('title');
        $Announcement->description = $request->input('description');
        $Announcement->projectmanager = $PM->name;
        $Announcement->date = $request->input('date');
        $Announcement->time = $request->input('time');
        $Announcement->show = $request->input('show');
        $Announcement->save();
    

    
        return response()->json(['message' => 'Event added successfully']);
    }
}
