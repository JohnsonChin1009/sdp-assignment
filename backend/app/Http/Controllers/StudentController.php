<?php

namespace App\Http\Controllers;

use App\Models\students;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    public function index()
    {
        $students = students::all();
        return response()->json($students);
    }
}
