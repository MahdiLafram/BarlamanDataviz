var Data = [
            {
              value: 107,
              color: "#f15b40",
              highlight: "#ed1e24",
              label: "Parti de la Justice et du Développement (PJD)"
            },
            {
              value: 60,
              color: "#fdb64e",
              highlight: "#fba51a",
              label: "Parti de l'Istiqlal (PI)"
            },
            {
              value: 52,
              color: "#f7ee61",
              highlight: "#f4eb20",
              label: "Rassemblement National des Indépendants (RNI)"
            },
            {
              value: 47,
              color: "#aed361",
              highlight: "#9bca3c",
              label: "Parti Authenticité et Modernité (PAM)"
            },
            {
              value: 39,
              highlight: "#70c5a4",
              color: "#8ed0b5",
              label: "Union Socialiste des Forces Populaires (USFP)"
            },
            {
              value: 32,
              highlight: "#40b8ea",
              color: "#70c3ed",
              label: "Mouvement Populaire (MP)"
            },
            {
              value: 23,
              color: "#6783c2",
              highlight: "#436fb6",
              label: "Union Constitutionnelle (UC)"
            },
            {
              value: 18,
              highlight: "#8750a1",
              color: "#9a6db0",
              label: "Parti du Progrès et Socialisme (PPS)"
            },
            {
              value: 17,
              color: "#f15f90",
              highlight: "#ec197a",
              label: "Autres"
            },
          ];

          var DataFemmes = [
            {
              value: 329,
              label: "Hommes",
              color: "#70c3ed",
              highlight: "#40b8ea",
            },
            {
              value: 66,
              color: "#8ec975",
              highlight: "#71c055",
              label: "Femmes",
              
            },
          ];

          var DataGov = [
            {
              value: 209,
              label: "Oui",
              color: "#70c3ed",
              highlight: "#40b8ea",
            },
            {
              value: 11,
              label: "Soutien",
              color: "#8ec975",
              highlight: "#71c055",
            },
            {
              value: 175,
              label: "Opposition",
              color: "#f15b40",
              highlight: "#ed1e24",
            },
          ];

          window.onload = function(){
            var ctx = document.getElementById("chart-area").getContext("2d");
            window.myDoughnut = new Chart(ctx).Doughnut(Data, {
                          animationEasing : "linear", responsive : true,
            });
            var cty = document.getElementById("chart-area2").getContext("2d");
            window.myDoughnut = new Chart(cty).Doughnut(DataFemmes, {
                          animationEasing : "linear", responsive : true,
            });
            var ctz = document.getElementById("chart-area3").getContext("2d");
            window.myDoughnut = new Chart(ctz).Doughnut(DataGov, {
                          animationEasing : "linear", responsive : true,
            });
        };