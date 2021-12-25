<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStudentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->string('id_number')->nullable()->unique();
            $table->string('first_name');
            $table->string('last_name');
            $table->string('previous_school')->nullable();
            $table->string('other_names')->nullable();
            $table->boolean('active')->default(true);
            $table->date('dob');
            $table->date('admission_date');
            $table->char('gender')->default('M');
            $table->string('residential_status')->default('day');
            $table->text('photo_url')->nullable();
            $table->text('address')->nullable();
            $table->string('guardian_first_name');
            $table->string('guardian_last_name');
            $table->string('guardian_email')->nullable()->unique();
            $table->string('guardian_phone_number')->unique();
            $table->unsignedBigInteger('class_id');
            $table->unsignedBigInteger('school_id');
            $table->foreign('school_id')->references('id')->on('schools');
            $table->foreign('class_id')->references('id')->on('school_classes');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('students');
    }
}
