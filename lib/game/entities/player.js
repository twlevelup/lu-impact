ig.module(
    'game.entities.player'
)
.requires(
    'impact.entity'
)
.defines(function() {
    EntityPlayer = ig.Entity.extend({
        name: "player",

        size: {x: 20, y: 20},

        init: function(x, y, settings) {
            this.parent(x, y, settings);
        },

        draw: function() {
            var g = ig.system.context;
            g.strokeStyle = "#ffffff";
            g.strokeRect(
                this.pos.x - (this.size.x / 2),
                this.pos.y - (this.size.y / 2),
                this.size.x,
                this.size.y
            );
        },

        update: function() {
            if (ig.input.state("up")) {
                this.pos.y -= 1;
            }
            else if(ig.input.state("down")) {
                this.pos.y += 1;
            }

            if (ig.input.state("left")) {
                this.pos.x -= 1;
            }
            else if (ig.input.state("right")) {
                this.pos.x += 1;
            }
        }
    });
});
