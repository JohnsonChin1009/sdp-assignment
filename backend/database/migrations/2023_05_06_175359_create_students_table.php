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
            $table->string('tp_number', 8)->primary();
            $table->string('name');
            $table->string('field_of_study');
            $table->string('specialism');
            $table->string('email');
            $table->string('title');
            $table->string('projectmanager');
            $table->string('supervisor');
            $table->string('secondmarker');
            $table->string('intake_code');
            


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
