<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTeachersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('teachers', function (Blueprint $table) {
            $table->id();
            $table->string('first_name');
            $table->string('last_name');
            $table->string('other_names')->nullable();
            $table->char('gender')->default('M');
            $table->string('rank')->nullable();
            $table->string('staff_id')->nullable();
            $table->date('dob')->nullable();
            $table->string('ssnit_number')->nullable();
            $table->string('id_number')->nullable();
            $table->string('academic_qualification')->nullable();
            $table->string('professional_qualification')->nullable();
            $table->date('appointment_date')->nullable();
            $table->date('date_assumed')->nullable();
            $table->string('bank')->nullable();
            $table->string('account_number')->nullable();
            $table->string('email')->unique()->nullable();
            $table->string('phone_number')->unique();
            $table->unsignedBigInteger('school_id');
            $table->foreign('school_id')->references('id')->on('schools');
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
        Schema::dropIfExists('teachers');
    }
}
