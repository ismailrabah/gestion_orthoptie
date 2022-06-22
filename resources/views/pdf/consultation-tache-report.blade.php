<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <title>consultation-tache-report</title>
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
            <span style="float: left">Agadir le: {{$ct->consultation->date}}</span>
            <p><B>Compte Rendu</B> </p>
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
                    <td style="width: 180px">Fichier:</td>
                    <td>{{$ct->consultation->fichier->titre}}</td>
                </tr>
                <tr>
                    <td style="width: 180px">Salle:</td>
                    <td>{{$ct->consultation->salle->name}}</td>
                </tr>
                <tr>
                    <td style="width: 180px">Motif du bilan:</td>
                    <td>{{$ct->consultation->fichier->motif_de_bilan}}</td>
                </tr>
                <tr>
                    <td style="width: 180px">Atcd:</td>
                    <td>{{$ct->consultation->fichier->atcd}}</td>
                </tr>
                <tr>
                    <td style="width: 180px">Medcin traitant:</td>
                    <td>{{$ct->consultation->fichier->medcin_traitant}}</td>
                </tr>
                <tr>
                    <td style="width: 180px">Traitement:</td>
                    <td>{{$ct->consultation->traitement}}</td>
                </tr> 
                <tr>
                    <td style="width: 180px">Diagnostique:</td>
                    <td>{{$ct->consultation->diagnostique}}</td>
                </tr> 
                <tr>
                    <td style="width: 180px">Fichier commentaire:</td>
                    <td>{{$ct->consultation->fichier->commentaire}}</td>
                </tr>
                <tr>
                    <td style="width: 180px">Tache commentaire:</td>
                    <td>{{$ct->commentaire}} </td>
                </tr>
                <tr>
                    <td style="width: 180px">Consultation commentaire:</td>
                    <td>{{$ct->consultation->commentaire}} </td>
                </tr>
                <tr>
                    <td>Consultation Note:</td>
                    <td>{{$ct->consultation->note}}</td>
                </tr>
            </table>
        </div><br><br><br>
        <br><br><br><br>
        <div style="margin-left: 80px">
            {{$ct->consultation->orthoptiste->name}}
            {{$ct->consultation->orthoptiste->last_name}}
            Signature : 
        </div>
        
    </body>
</html>