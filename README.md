# Mini Driver: intercity ride sharing (React Native prototype)

A mobile app prototype, in Arabic, for sharing rides between Egyptian cities. **Drivers** publish rides with a number of seats and a price, and **passengers** request rides and pick their route on a map.

Built with **React Native, Expo and TypeScript**.

> **Prototype:** the app runs on mock data (`data/`), with no backend yet. It shows the screens, the navigation and the ride logic.

## Features

- **Two roles:** passenger and driver, each with their own sign-up screen.
- **Onboarding** and login screens.
- **Request a ride:** pickup point, destination, price and time, with a form built with React Native Paper.
- **Map:** choose the start and end points by tapping the map, drawn with markers and a line between them (react-native-maps), using the device location (expo-location).
- **Driver home:** the list of available rides, with accept and cancel actions.
- **Ride details**, profile, services and contact screens.
- **Tab navigation** with file-based routing (Expo Router).

## Tech stack

| Part | Tech |
|---|---|
| App | React Native 0.74, Expo SDK 51, TypeScript |
| Navigation | Expo Router (file-based routes, tabs) |
| UI | React Native Paper, Expo Vector Icons, Linear Gradient |
| Maps | react-native-maps, expo-location |
| State | React Context (`AuthContext`) |

## How the code is organised

```
app/            routes (Expo Router): (tabs) for the main tabs, (routes) for the other screens
screens/        the screens themselves (auth, home, ride, driver, profile...)
components/     reusable pieces: ride cards, map, location and transport pickers
context/        AuthContext: the signed-in user
data/           mock data: users, cities, rides
hooks/          ride logic on the mock data: create, request, accept, cancel
types/          TypeScript types: User, City, Ride, RideStatus
```

A ride moves through these states: `pending → accepted → in_progress → completed`, or `cancelled`.

## Run it

```bash
npm install
npx expo start      # scan the QR code with the Expo Go app
```

## Next steps

- A real backend (authentication, rides, seat counts)
- Real-time updates when a driver accepts a ride
- Search rides by city and date
