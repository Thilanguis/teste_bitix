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
        // dump($request->input());
        $arquivoPlanos  = file_get_contents(__DIR__.'/listaPlanos.json');
        $jsonPlanos = json_decode($arquivoPlanos);

        foreach($jsonPlanos as $key => $planos){
            $json_final_planos[$planos->codigo] = $planos;
        }
        
        // dump($json_final_planos);
        
        $arquivoPrecos  = file_get_contents(__DIR__.'/listaPrecos.json');
        $jsonPrecos = json_decode($arquivoPrecos);
        
        $json_final_precos = [];

        foreach($jsonPrecos as $key => $precos){
            $json_final_precos[] = $precos;
        }
        
        // dump($json_final_precos);
        

        $codigoPlano = $request->input('tipoPlano');
        
        $minimoVidas = $request->input('qntBeneficiarios');
        
        $idades = $request->input('idadeBeneficiarios');
        $cod = 0;
        $total = 0;
        $precoUnitario = 0;
        
        foreach($json_final_precos as $key => $preco){
            if($preco->codigo == $codigoPlano){
                if($preco->minimo_vidas <= $minimoVidas){ 
                    $total = $this::getPrecoUnitario($idades, $preco, $request);
                }
            }
        }
        $somaTotal = $this::getPrecoTotal($total);
        // dump($total);
        // dump($somaTotal);
        // dd('resultado');
        $nomePlano = $this::getTipoPlano($request);
        
        return view('precoPlanos', [
            'total' => $total,
            'somaTotal' => $somaTotal,
            'nomePlano' => $nomePlano
        ]);
    }
    
    public function getPrecoUnitario($idades, $preco, $request){
        $nomes = $request->input('nomeBeneficiario');
        $precoUnitario = [];
        foreach ($idades as $key => $idade) {
            if($idade < 18){    
                $precoUnitario[] = [(double) $preco->faixa1, $nomes[$key]];
                // dump('if',   $idade);
            }
            elseif ($idade >= 18 && $idade <= 40){
                $precoUnitario[] = [(double) $preco->faixa2, $nomes[$key]];
                // dump('elseif', $idade);
            }
            else {
                $precoUnitario[] = [(double) $preco->faixa3, $nomes[$key]];
                // dump('else', $idade);
            }
        }
        return $precoUnitario;
    }

    public function getPrecoTotal($total){
        $precoFinal = 0;
        foreach ($total as $key => $preco) {
            $precoFinal += $preco[0];
        }
        return $precoFinal;
    }

    public function getTipoPlano(Request $request){

        $codigoPlano = $request->input('tipoPlano');

        switch ($codigoPlano) {
            case "1":
                return "Bitix Customer Plano 1";
                break;
            case "2":
                return "Bitix Customer Plano 2";
                break;
            case "3":
                return "Bitix Customer Plano 3";
                break;
            case "4":
                return "Bitix Customer Plano 4";
                break;
            case "5":
                return "Bitix Customer Plano 5";
                break;
            case "6":
                return "Bitix Customer Plano 6";
                break;
        }
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
