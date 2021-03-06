# To-do List

## Items

### Start Menu

#### Implement share button functionality (or stand in functionality)

#### Implement settings menu

### Migrate Processes to their own files

#### Migrate whole classes to their own files

#### Migrate like functions from unbefitting classes into their own class and file

#### Migrate functions better suited in another class/file to the respective class/file

### Enemy Spawning/Creation

#### Implement constructor referencing database of enemy types

#### Implement rarity determination function

#### Implement stats tables for a handful of enemy types and their rarities

### Player Attacks/Items & Abilities

#### Implement at least one animation for each attack type

#### Implement animation on mouse events

#### Implement collision boxes for at least one of each attack type

#### Implement damage to enemies or objects upon collision

#### Implement monster death (not implementing drop chance on death)

#### Implement at least 3 different item animations on mouse events

#### Implement necessary collisions for the items

#### Implement the interactions of the items with the rest of the world (i.e. grappling hook movement, bomb damage, orb blindness effect to other entities)

### Enemy Attacks/Abilities

#### Implement Enemy action economy per enemy tick (time tbd)

#### Implement enemy movement action

#### Implement enemy attack animations based off attack type

#### Implement enemy attack collision

#### Implement damage to enemies, the player, and/or objects when collision is detected

#### Implement ability's animation

#### Implement ability's relevant collisions

#### Implement ability's effects

### NPC {Simple-Revamp}

#### Implement idicators displayed above NPCs

#### Implement Quest and Shop UI Structure

### Unique Monsters

#### Implement Unique Monster rendering

#### Implement individual parts breaking

### Floor Generation {Simple-Revamp}

#### Implement algorithm to append halls to rooms and slowly cut off all possible exits with dead-end rooms

#### Implement end portal creation function which determines it's location in a dead-end room

#### Implement UBM or BM creation function which puts it in a suitable room adjacent to the portal room, transforming the selected room if necessary to accomodate for the boss and its minions

### REworks

#### Inventory

##### Implement inventory page updating from file

##### Implement Equipping and Unequipping for inventory items

##### Implement abilities page updating from file

##### Implement ability upgrade in abilities page (temporary)

##### Implement SMod applying in abilities page

##### Implement the player's compendium (l)

###### Implement the compendium home page

###### Implement switching compendium pages

###### Implement enemies compendium page

###### Implement items compendium page

###### Implement key NPCs compendium page

###### Implement effects compendium page

##### Implement compendium page updating based off the enemies_seen, items_seen, npcs_seen, and effects_seen, arrays in the player's file

#### NPCs

#### Room Generation

#### Floor Generation

### Implement Map

#### Basic steps tbd

### Implement Break/Death Drops

#### Implement chance function

#### Implement item add to inventory

### Implement Server

#### Implement auto updating of subtitle from package.json file

#### Implement README.md into footer

#### Implement serverside saving of dungeon schematics

#### Implement Credential API for logging in and profile saving

#### Implement Log In API to site

#### Implement Save and Load from database

#### Implement Multiplayer lobby API routes

### Implement Item Editor

#### Implement Editor UI Framework

#### Implement Item Selection

#### Implement Placement Graphics

#### Implement Placement of Data (both adding to the working tree of the item and removing the item from inventory)

#### Implement Saving

#### Implement Loading

#### Implement Erasure of Item (both removing it from the working tree of the item and adding the item to inventory)

#### Implement Undo and Redo (as well as edit history)

#### Implement Stats Calculator for Saved Gear

### Implement Skill Growth

#### Basic steps tbd2

## Completed Items

### Make Surrounding Webpage(done)

#### Style Header

#### Style Login Area (feature to be implemented later)

#### Style Game Housing

##### Bezeled edges surrounding game window

##### Status bar below game window

##### Miscellaneous Menus (i.e. inventory or chat) to the right of the game window

#### Set subtitle to display the current game version

#### Style and fill out footer (aka about us)

#### Update README

### Room Generation(done) {Simple-Revamp}

#### Implement load and save features, as well as a constructor holding it's type and dimensions

#### Implement Enemy generation (scenario retrival & handling)

### Implement Basic Game Existance(done)

#### Implement Game rendering using Pixi.js

#### Implement rendering of a player placeholder/sprite

#### Remove unnecessary props passing and calls in methods/remove React from classes where possible

### Player(done)

#### Implement the player's basic movement (w,s,a,d)

#### Implement the player's dodge ability [Just keybind and movement not intagibility] (space)

#### Implement the player's attacks [Just keybinds] (mouse events)

#### Implement the player's abilities [Just keybinds] (1,2,3)

#### Implement the player's interaction [Just keybinds since it's on a case by case basis] (e)

#### Implement the player's chat/command window [Just keybinds and a few basic commands] (t)

#### Implement player's map [Just the keybind] (m)

#### Implement the player's Inventory [Just keybind and basic UI structure] (e) {Single-Revamp}

#### Implement the player's abilities page [Just keybind and basic UI structure] (o) {Single-Revamp}

### Start Menu(done)

#### Implement Start Menu handling in rendering

#### Implement Start button

#### Implement Settings button

#### Implement share button

## Miscellaneous
