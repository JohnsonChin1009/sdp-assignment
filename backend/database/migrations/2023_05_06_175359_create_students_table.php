<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('students', function (Blueprint $table) {
            $table->string('tp_number');
            $table->string('name');
            $table->string('field_of_study');
            $table->string('specialism');
            $table->string('email');
            $table->string('fyp_title');
            $table->string('lecturerid');
            $table->string('lecturername');
            
            $table->primary('tp_number');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};
