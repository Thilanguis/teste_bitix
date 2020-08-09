@extends('app')

@section('content')

{{-- <div class="container"> --}}
    <table class="table table-hover">
        <thead>
            <tr>
                <th>Beneficiários</th>
                <th>Valor</th>
                <th>Plano</th>
                <th>Total</th>
            </tr>
                    @foreach ($total as $key => $teste)
                <tr>
                    <td scope="col"> {{ $teste[1] }}</td>
                    <td>{{ $teste[0]." Reais" }}</td>
                    @endforeach
                    <td>{{ $nomePlano }}</td>
                    <td>{{ $somaTotal. " Reais" }}</td>
                </tr>
                </thead>
      </table>
{{-- </div> --}}
@endsection