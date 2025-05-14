import java.util.*;
import java.util.Timer;

class Exam {
    private static final int TOTAL_QUESTIONS = 100;
    private static final int EXAM_DURATION = 60 * 60; // 60 minutes in seconds
    private static final double NEGATIVE_MARKING = 0.25;
    
    private static int currentQuestion = 0;
    private static Map<Integer, String> userAnswers = new HashMap<>();
    private static Set<Integer> bookmarkedQuestions = new HashSet<>();
    private static Timer timer = new Timer();
    
    public static void main(String[] args) {
        startTimer();
        showQuestion();
    }
    
    private static void startTimer() {
        TimerTask task = new TimerTask() {
            int timeLeft = EXAM_DURATION;
            
            @Override
            public void run() {
                if (timeLeft > 0) {
                    System.out.println("Time left: " + timeLeft + " seconds");
                    timeLeft--;
                } else {
                    System.out.println("Time's up! Submitting exam...");
                    submitExam();
                    timer.cancel();
                }
            }
        };
        timer.scheduleAtFixedRate(task, 0, 1000);
    }
    
    private static void showQuestion() {
        System.out.println("Question " + (currentQuestion + 1) + ": Sample Question?");
        System.out.println("A) Option 1  B) Option 2  C) Option 3  D) Option 4");
        // Get user input logic here (e.g., Scanner input)
    }
    
    private static void bookmarkQuestion() {
        bookmarkedQuestions.add(currentQuestion);
        System.out.println("Question " + (currentQuestion + 1) + " bookmarked.");
    }
    
    private static void submitExam() {
        double score = calculateScore();
        System.out.println("Exam submitted! Your score: " + score);
    }
    
    private static double calculateScore() {
        int correctAnswers = 0, wrongAnswers = 0;
        for (Map.Entry<Integer, String> entry : userAnswers.entrySet()) {
            // Assume "A" is correct for all
            if (entry.getValue().equals("A")) {
                correctAnswers++;
            } else {
                wrongAnswers++;
            }
        }
        return correctAnswers - (wrongAnswers * NEGATIVE_MARKING);
    }
}
