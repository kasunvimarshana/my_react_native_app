# identify outliers with standard deviation
from numpy.random import seed
from numpy.random import randn
from numpy import mean
from numpy import std
### seed the random number generator
##seed(1)
### generate univariate observations
##data = 5 * randn(10000) + 50
### calculate summary statistics


##data=[9, 10.9, 11.4, 11.9]
##data=[9, 10.9, 11.4, 11.9]
data=[11.44, 11.77, 11.385, 10.0]

data_mean, data_std = mean(data), std(data)
print('data_mean = ', data_mean)
print('data_std= ', data_std)


# identify outliers
cut_off = data_std * 1
lower, upper = data_mean - cut_off, data_mean + cut_off
# identify outliers
outliers = [x for x in data if x < lower or x > upper]
print(outliers)
print('Identified outliers: %d' % len(outliers))


# remove outliers
outliers_removed = [x for x in data if x >= lower and x <= upper]
print('Non-outlier observations: %d' % len(outliers_removed))
print('Newdata', outliers_removed)
print('New Avg send to condition prediction', mean(outliers_removed))