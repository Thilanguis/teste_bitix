@extends('app')

@section('content')
<div>
    <p> <b>Plano:</b> {{ $nomePlano }}</p>
</div>
{{-- <div class="container"> --}}
    <table class="table table-hover">
        <thead>
            <tr>
                <th>Beneficiários</th>
                <th>Valor</th>
                <th>Total</th>
            </tr>
                    @foreach ($total as $key => $teste)
                <tr>
                    <td scope="col"> {{ $teste[1] }}</td>
                    <td>{{ $teste[0]." Reais" }}</td>
                    @endforeach
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>{{ $somaTotal. " Reais" }}</td>
                </tr>
                </thead>
      </table>
{{-- </div> --}}
@endsection