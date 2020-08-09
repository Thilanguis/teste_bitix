@extends('app')
@section('content')
            <div class="content">
                <div class="title m-b-md">
                    Teste Bitix
                </div>


        {!! Form::open(['url' => route('form.store'), 'method' => 'POST']) !!}
            <div class="form-row">
                <div class="form-group col">
                    {!! Form::label('qntBeneficiarios', 'Quantidade de beneficiários') !!}
                    {!! Form::text('qntBeneficiarios', null, ['class' => 'form-control numeroBeneficiarios']) !!}
                </div>
                <div class="form-group col">
                    {!! Form::label('tipoPlano', 'Esolha um plano') !!}
                    {!! Form::select('tipoPlano', $listaPlanos, null, ['class' => 'form-control', 'placeholder' => 'Escolha um plano']) !!}
                </div>
            </div>  
            <div class="form-row" id="beneficiarios">
                <div class="form-group col">
                    {!! Form::label('nomeBeneficiario', 'Nome do beneficiário') !!}
                    {!! Form::text('nomeBeneficiario[]', null, ['class' => 'form-control']) !!}
                </div>
                <div class="form-group col">
                    {!! Form::label('idadeBeneficiarios', 'Idade do beneficiário') !!}
                    {!! Form::number('idadeBeneficiarios[]', null, ['class' => 'form-control']) !!}
                </div>
            </div>
            <div id="dadosBeneficiarios" class="form-row oculto">
                <div class="form-group col">
                    {!! Form::label('nomeBeneficiario', 'Nome do beneficiário') !!}
                    {!! Form::text('nomeBeneficiario[]', null, ['class' => 'form-control', 'disabled']) !!}
                </div>
                <div class="form-group col">
                    {!! Form::label('idadeBeneficiarios', 'Idade do beneficiário') !!}
                    {!! Form::number('idadeBeneficiarios[]', null, ['class' => 'form-control', 'disabled']) !!}
                </div>
                <br>
            </div>
            {!! Form::submit('Consultar', ['class' => 'btn btn-outline-secondary']) !!}
        {!! Form::close() !!}
            </div>
        </div>
    @endsection


