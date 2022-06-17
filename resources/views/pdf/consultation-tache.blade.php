<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <title>consultation-tache</title>
    </head>
    <body>
        <style>
        body , table{
            width: 100%;
        }
        
        .table,.table td , .table th  {
            font-size: 11px;
            border: 1px solid black;
            border-collapse: collapse;
        }
        .logo1{
            position: relative;
            right: -250px;
            top: -20px;
        }
        </style>
        
        <div style="text-align: center;">
            <img class="logo1" src="vendor/jig/images/logo.png" width="100" height="70" alt="logo">
            <span style="float: left">Agadir le: {{$ct->consultation->date}}</span>
            <p><B>{{$ct->tache->name}}</B> </p>
        </div>

        <div>
            <table style="text-align: center">
                <tr>
                    <td style="text-align: left"> Nom: {{$ct->consultation->fichier->patient->nom}}</td>
                    <td> Prénom: {{$ct->consultation->fichier->patient->prenom}}</td>
                    <td> DDN: {{$ct->consultation->fichier->patient->ddn}}</td>
                </tr>
            </table>
        </div>
        <br>
        <div>
            <table>
                <tr>
                    <td style="width: 120px">Motif du bilan:</td>
                    <td>{{$ct->consultation->fichier->motif_de_bilan}}</td>
                </tr>
                <tr>
                    <td style="width: 120px">Atcd:</td>
                    <td>{{$ct->consultation->fichier->atcd}}</td>
                </tr>
                <tr>
                    <td style="width: 120px">Medcin traitant:</td>
                    <td>{{$ct->consultation->fichier->medcin_traitant}}</td>
                </tr>
                <tr>
                    <td style="width: 120px">Commentaire:</td>
                    <td>{{$ct->consultation->fichier->commentaire}}</td>
                </tr>
                <tr>
                    <td style="width: 120px">Consultation:</td>
                    <td>{{$ct->consultation->note}} <br> {{$ct->consultation->commentaire}} </td>
                </tr>
                <tr>
                    <td>Note:</td>
                    <td>{{$ct->commentaire}}</td>
                </tr>
            </table>
        </div><br><br><br>
        <div>
            <table>
                <tr>
                    <td> </td>
                    <td style="text-align: right">
                        Le Prix Normale: {{$ct->tache->price}} DH <br>
                        {{-- @if ($ct->remises > 0 ) --}}
                            Remises: {{$ct->remises}} @if ($ct->pourcentage_remises) % @else DH @endif<br>
                        {{-- @endif --}}
                        Le Prix Final: 
                        @if ($ct->remises > 0 )
                            @if ($ct->pourcentage_remises )
                                {{ ($ct->tache->price)-(($ct->remises / 100) * $ct->tache->price ) }} DH
                            @else
                                {{ $ct->tache->price - $ct->remises }} DH
                            @endif
                        @else
                            {{ $ct->tache->price }} DH
                        @endif
                    </td>
                </tr>
            </table>
        </div>
        <br><br><br><br>
        <div style="margin-left: 80px">
            {{$ct->consultation->orthoptiste->name}}
            {{$ct->consultation->orthoptiste->last_name}}
        </div>
        
    </body>
</html>