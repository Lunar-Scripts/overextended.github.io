Starts a progress bar that can callback a function upon completion or cancellation.

Prevents actions such as opening the inventory, reloading, etc.

```lua
-- options: table
-- completed: function
exports.ox_inventory:Progress(options, completed)
```
Options table values:
```lua
-- duration: number
-- label: string
-- useWhileDead: boolean (optional)
-- canCancel: boolean (optional)
-- anim: table (optional)
    -- dict: string
    -- clip: string
    -- flag: number (optional - default is 49)
-- scenario: string (optional)
-- prop/propTwo: table (optional)
    -- model: hash or string
    -- bone: number (optional - default is 60309)
    -- pos: table (optional)
        -- x: number (default is 0)
        -- y: number (default is 0)
        -- z: numebr (default is 0)
    -- rot: table (optional)
        -- x: number (default is 0)
        -- y: number (default is 0)
        -- z: number (default is 0)
-- disable: table (optional)
    -- move: boolean (optional)
    -- car: boolean (optional)
    -- combat: boolean (optional)
    -- mouse: boolean (optional)
```
:::danger

If you define a scenario while you have a defined anim table the scenario will be ignored.
:::

**Example:**
```lua
exports.ox_inventory:Progress({
    duration = 2000,
    label = 'Drinking water',
    useWhileDead = false,
    canCancel = true,
    disable = {
        move = false,
        car = true,
        combat = true,
        mouse = false
    },
    anim = {
        dict = 'mp_player_intdrink',
        clip = 'loop_bottle',
        flags = 49,
    },
    prop = {
        model = 'prop_ld_flow_bottle',
        pos = { x = 0.03, y = 0.03, y = 0.02},
        rot = { x = 0.0, y = 0.0, y = -1.5},
        bone = 58866
    },
}, function(cancel)
    if not cancel then
        print("You drank some water - that'll quench ya!")
    end
end)
```

### CancelProgress

Cancels the currently active progress bar.

```lua
exports.ox_inventory:CancelProgress()
```

### ProgressActive
Returns true or false whether the progress bar is currently active or not

```lua
exports.ox_inventory:ProgressActive()
```