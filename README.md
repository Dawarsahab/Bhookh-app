# Bhookh App

A React Native application for displaying recipes, featuring user authentication and a responsive UI.

## Setup Instructions

### Prerequisites
- Node.js (v14 or later)
- npm or yarn
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

### Installation Steps

1. Clone the repository:
```bash
git clone https://github.com/Bhookh-app/bhookh-app.git
cd bhookh-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Install iOS dependencies (macOS only):
```bash
cd ios
pod install
cd ..
```

4. Start the Metro bundler:
```bash
npm start
# or
yarn start
```

5. Run the application:

For iOS:
```bash
npm run ios
# or
yarn ios
```

For Android:
```bash
npm run android
# or
yarn android
```

### Testing the App

Use any of the following mock credentials to log in:
- Username: user1, Password: pass1
- Username: user2, Password: pass2
- Username: user3, Password: pass3

## Architecture and Design Decisions

### Project Structure
```
src/
  ├── components/      # Reusable UI components
  ├── screens/         # Screen components
  ├── services/        # API and other services
  ├── constants/       # App-wide constants
  └── utils/          # Utility functions
```

### Key Design Decisions

1. **MVC Architecture**
   - Models: Handled through the services layer
   - Views: Components and screens
   - Controllers: Screen-level components managing state and business logic

2. **Component Design**
   - Created reusable components like RecipeCard for better maintainability
   - Implemented proper component hierarchy to minimize prop drilling
   - Used functional components with hooks for better performance

3. **State Management**
   - Used React's built-in useState and useEffect hooks
   - Kept state management simple due to the app's current scope
   - Structured for easy integration of Redux/Context if needed later

4. **Error Handling**
   - Implemented comprehensive error handling for API calls
   - Added user-friendly error messages
   - Included loading states for better UX

5. **Styling Approach**
   - Used StyleSheet.create for better performance
   - Implemented responsive designs using flexible layouts
   - Maintained consistent styling through reusable style constants

6. **Authentication**
   - Implemented mock authentication system
   - Structured for easy replacement with real authentication
   - Secure storage ready for token management

### Performance Considerations

1. **Image Optimization**
   - Added fallback images for failed loads
   - Implemented proper image sizing
   - Used placeholder images during loading

2. **List Performance**
   - Implemented FlatList with proper key extraction
   - Added pull-to-refresh functionality
   - Optimized render performance with proper memo usage

## Development Challenges and Solutions

### 1. Cross-Platform Compatibility

**Challenge:** Ensuring consistent UI across iOS and Android.

**Solution:**
- Used platform-specific styling where needed
- Implemented custom components for platform-specific behaviors
- Tested extensively on both platforms

### 2. Form Validation

**Challenge:** Implementing robust form validation while maintaining good UX.

**Solution:**
- Created centralized validation utility
- Implemented real-time validation
- Added clear error messages
- Used controlled components for better form management

### 3. API Integration

**Challenge:** Handling various API states and errors gracefully.

**Solution:**
- Implemented proper loading states
- Added error boundaries
- Created retry mechanisms
- Used try-catch blocks effectively

### 4. Navigation Flow

**Challenge:** Managing navigation state and user flow.

**Solution:**
- Used React Navigation with typed navigation
- Implemented proper navigation patterns
- Added navigation guards for authenticated routes

### 5. Performance Optimization

**Challenge:** Ensuring smooth performance with dynamic content.

**Solution:**
- Implemented proper list virtualization
- Used memo and callback hooks where needed
- Optimized re-renders
- Implemented proper asset loading strategies

## Future Improvements

1. **Features**
   - Add recipe search functionality
   - Implement recipe favorites
   - Add user profile management
   - Include offline support

2. **Technical**
   - Add unit and integration tests
   - Implement proper CI/CD pipeline
   - Add proper authentication system
   - Implement state management solution for scaling

3. **UX/UI**
   - Add animations and transitions
   - Implement dark mode
   - Add accessibility features
   - Improve error handling UX

