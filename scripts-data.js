window.scripts = {
  "nameless-admin": {
    title: "Nameless Admin",
    image: "assets/NAnew.png",
    desc: "Nameless Admin là bản cải tiến của Infinite Yield (Chắc thế).",
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/ltseverydayyou/Nameless-Admin/main/Source.lua"))();'
  },
  "doors": {
    title: "Doors: Blackking",
    image: "assets/doors.png",
    desc: "Blackking là script khá ngon cho Doors",
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/DarkDoorsKing/Project/main/Blackking.Project"))()'
  },
  "piggy": {
    title: "Piggy: Star Hack Hub",
    image: "assets/piggy.png",
    desc: "Script Piggy giúp mấy thằng bị skill issue",
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/StarHackScripts/StarHack-Hub-Deepstar-Hub/refs/heads/main/StarHack%20Hub%20-%20Piggy%20Pro%20Hub.txt"))()'
  },
  "ink-game": {
    title: "Ink Game: Ringta",
    image: "assets/ink-game.png",
    desc: "Trở thành nhân vật chính không khó (trừ khi xài ngu)",
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/wefwef127382/inkgames.github.io/refs/heads/main/ringta.lua"))()'
  },
  "minecraft": {
    title: "Minecraft Texture",
    image: "assets/minecraft.png",
    desc: "Biến Roblox thành Minecraft",
    code: '-- NOTE this does WORK in some games

        local faces = {"Front", "Back", "Bottom", "Top", "Right", "Left"}
        local materials = {
            {"Wood", "3258599312"}, {"WoodPlanks", "8676581022"},
            {"Brick", "8558400252"}, {"Cobblestone", "5003953441"},
            {"Concrete", "7341687607"}, {"DiamondPlate", "6849247561"},
            {"Fabric", "118776397"}, {"Granite", "4722586771"},
            {"Grass", "4722588177"}, {"Ice", "3823766459"},
            {"Marble", "62967586"}, {"Metal", "62967586"},
            {"Sand", "152572215"}
        }
        
        function texture(ins, id)
            for _, v in pairs(faces) do
                local texture = Instance.new("Texture", ins)
                texture.ZIndex = 2147483647
                texture.Texture = "rbxassetid://" .. id
                texture.Face = Enum.NormalId[v]
                texture.Color3 = ins.Color
                texture.Transparency = ins.Transparency
            end
        end
        
        for _, part in pairs(workspace:GetDescendants()) do
            if part:IsA("BasePart") then
                for _, v in pairs(materials) do
                    if part.Material.Name == v[1] then
                        texture(part, v[2])
                        part.Material = "SmoothPlastic"
                    end
                end
            end
        end'
  }
  
  // Thêm script khác ở đây
};
