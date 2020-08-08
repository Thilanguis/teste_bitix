<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\FormValidation;

class Planos extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $arquivo  = file_get_contents(__DIR__.'/listaPlanos.json');
        $json = json_decode($arquivo);
        $json_final = [];

        foreach($json as $key => $nome){
            $json_final[$nome->codigo] = $nome->nome;
        }

        return view('welcome', with(['listaPlanos' => $json_final]));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(FormValidation $request)
    {
        $arquivoPlanos  = file_get_contents(__DIR__.'/listaPlanos.json');
        $jsonPlanos = json_decode($arquivoPlanos);

        foreach($jsonPlanos as $key => $planos){
            $json_final_planos[$planos->codigo] = $planos;
        }

        dump($json_final_planos);

        $arquivoPrecos  = file_get_contents(__DIR__.'/listaPrecos.json');
        $jsonPrecos = json_decode($arquivoPrecos);

        $json_final_precos = [];

        foreach($jsonPrecos as $key => $precos){
            $json_final_precos[$precos->codigo] = $precos;
        }

        dump($json_final_precos);


        dd($request->input('qntBeneficiarios'));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
