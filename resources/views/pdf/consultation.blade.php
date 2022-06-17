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
            font-size: 13px;
            border: 1px solid black;
            border-collapse: collapse;
            text-align: center;
        }
        .logo1{
            position: relative;
            right: -250px;
            top: -20px;
        }
        </style>
        
        <div style="text-align: center;">
            <img class="logo1" src="vendor/jig/images/logo.png" width="100" height="70" alt="logo">
            <span style="float: left">Agadir le: {{$consultation->date}}</span>
            <p><B>Compte Rendu</B> </p>
        </div>

        <div>
            <table style="text-align: center">
                <tr>
                    <td style="text-align: left"> Nom: {{$consultation->fichier->patient->nom}}</td>
                    <td> Prénom: {{$consultation->fichier->patient->prenom}}</td>
                    <td> DDN: {{$consultation->fichier->patient->ddn}}</td>
                </tr>
            </table>
        </div>
        <br>
        <div>
            <table>
                <tr>
                    <td style="width: 120px">Motif du bilan:</td>
                    <td>{{$consultation->fichier->motif_de_bilan}}</td>
                </tr>
                <tr>
                    <td style="width: 120px">Atcd:</td>
                    <td>{{$consultation->fichier->atcd}}</td>
                </tr>
                <tr>
                    <td style="width: 120px">Medcin traitant:</td>
                    <td>{{$consultation->fichier->medcin_traitant}}</td>
                </tr>
                <tr>
                    <td style="width: 120px">Commentaire:</td>
                    <td>{{$consultation->fichier->commentaire}}</td>
                </tr>
                <tr>
                    <td style="width: 120px">Consultation:</td>
                    <td>{{$consultation->commentaire}} </td>
                </tr>
                <tr>
                    <td>Note:</td>
                    <td>{{$consultation->note}}</td>
                </tr>
            </table>
        </div><br><br><br>
        <div>
            <p><B>List des taches</B> </p>
            <table class="table">
                <thead>
                    <tr>
                        <th>Tache</th>
                        <th>Prix</th>
                        <th>Remise</th>
                        <th>Commentaire</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($consultation->taches as $tach)
                        <tr>
                            <td>{{$tach->name}}</td>
                            <td>{{$tach->price}} DH</td>
                            <td>{{$tach->pivot->remises}} @if ($tach->pivot->pourcentage_remises) % @else DH  @endif </td>
                            <td>{{ substr($tach->pivot->commentaire, 0, 30) }}...</td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
            <p><B>List des prestations</B> </p>
            <table class="table"> 
                <thead>
                    <tr>
                        <th>Prestation</th>
                        <th>Montant</th>
                        <th>Commentaire</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($consultation->prestations as $prestation)
                        <tr>
                            <td>{{$prestation->note}}</td>
                            <td>{{$prestation->montant}} DH</td>
                            <td>{{ substr($prestation->pivot->commentaire, 0, 30) }}...</td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
        <br><br><br><br>
        <div style="margin-left: 80px">
            {{$consultation->orthoptiste->name}}
            {{$consultation->orthoptiste->last_name}}
        </div>
        
    </body>
</html>