<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <title>consultation-tache-invoice</title>
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
            <p><B>Facture</B> </p>
            <p><B>{{$ct->tache->name}}</B> </p>
        </div>

        @if ($ct->remises > 0 )
            @if ($ct->pourcentage_remises )
                <?php $total = ($ct->tache->price)-(($ct->remises / 100) * $ct->tache->price );  ?>
            @else
                <?php $total = $ct->tache->price - $ct->remises;  ?>
            @endif
        @else
            <?php $total =  $ct->tache->price;  ?>
        @endif
        <br><br><br>
        <div>
            <table style="text-align: center">
                <tr>
                    <td style="text-align: left"> Nom: {{$ct->consultation->fichier->patient->nom}}</td>
                    <td> Prénom: {{$ct->consultation->fichier->patient->prenom}}</td>
                </tr>
                <tr>
                    <td style="text-align: left"> Date de naissance: {{$ct->consultation->fichier->patient->ddn}}</td>
                </tr>
            </table>
        </div>
        <br><br>
        <?php $price_en_leter = "xxxxxxxxx";?>
        <div style="text-align: center">
            Reçu la somme {{$total}} dh, ( {{ getCurrencyEnChars($total)}} )
        </div><br><br>
        <div>
            <table>
                <tr>
                    <td> </td>
                    <td style="text-align: center">
                        Le Prix Normale: {{$ct->tache->price}} DH <br>
                        {{-- @if ($ct->remises > 0 ) --}}
                            Remises: {{$ct->remises}} @if ($ct->pourcentage_remises) % @else DH @endif<br>
                        {{-- @endif --}}
                        Le Prix Final: {{$total}} DH
                    </td>
                </tr>
            </table>
        </div>
        <br><br><br><br>
        <div style="margin-left: 80px">
            Orthoptiste: Signature : 
        </div>
        
    </body>
</html>